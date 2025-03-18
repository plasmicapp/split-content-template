import * as React from "react";
import {
  PlasmicComponent,
  extractPlasmicQueryData,
  ComponentRenderData,
  PlasmicRootProvider,
} from "@plasmicapp/loader-nextjs";
import type { GetStaticPaths, GetStaticProps } from "next";

import Error from "next/error";
import { useRouter } from "next/router";
import { PLASMIC } from "@/plasmic-init";
import { getActiveVariation, rewriteWithoutTraits, generateAllPaths } from "@plasmicapp/loader-nextjs/edge";

export default function PlasmicLoaderPage(props: {
  plasmicData?: ComponentRenderData;
  queryCache?: Record<string, unknown>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  variation?: any;
}) {
  const { plasmicData, queryCache, variation } = props;
  const router = useRouter();
  if (!plasmicData || plasmicData.entryCompMetas.length === 0) {
    return <Error statusCode={404} />;
  }
  const pageMeta = plasmicData.entryCompMetas[0];
  return (
    <PlasmicRootProvider
      loader={PLASMIC}
      prefetchedData={plasmicData}
      variation={variation}
      prefetchedQueryData={queryCache}
      pageRoute={pageMeta.path}
      pageParams={pageMeta.params}
      pageQuery={router.query}
    >
      <PlasmicComponent component={pageMeta.displayName} />
    </PlasmicRootProvider>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { catchall } = context.params ?? {};
  const rawPlasmicPath = typeof catchall === 'string' ? catchall : Array.isArray(catchall) ? `/${catchall.join('/')}` : '/';
  // Parse the path, and extract the traits.
  const { path: plasmicPath, traits } = rewriteWithoutTraits(rawPlasmicPath);
 
  const plasmicData = await PLASMIC.maybeFetchComponentData(plasmicPath);

  // Pick the variation to use based on the traits
  const variation = getActiveVariation({
    splits: PLASMIC.getActiveSplits(),
    traits,
    path: plasmicPath
  });


  if (!plasmicData) {
    // non-Plasmic catch-all
    return { props: {} };
  }
  const pageMeta = plasmicData.entryCompMetas[0];
  // Cache the necessary data fetched for the page
  const queryCache = await extractPlasmicQueryData(
    <PlasmicRootProvider
      loader={PLASMIC}
      prefetchedData={plasmicData}
      pageRoute={pageMeta.path}
      pageParams={pageMeta.params}
    >
      <PlasmicComponent component={pageMeta.displayName} />
    </PlasmicRootProvider>
  );
  
  // Use revalidate if you want incremental static regeneration
  return { props: { plasmicData, queryCache, variation }, revalidate: 60 };
}

export const getStaticPaths: GetStaticPaths = async () => {
  const pageModules = await PLASMIC.fetchPages();
  const paths = pageModules.flatMap((page) =>
    generateAllPaths(page.path).map((path) => ({
      params: {
        catchall: path.substring(1).split('/')
      }
    }))
  );

  return {
    paths,
    // We set `fallback:"blocking"` to generate page variations lazily.
    // Once a page for a specific set of traits has been generated, it
    // will be cached and reused.
    fallback: "blocking",
  };
}
