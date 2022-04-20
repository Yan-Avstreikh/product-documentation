import { ScullyConfig } from '@scullyio/scully';

/** this loads the default render plugin, remove when switching to something else. */
import '@scullyio/scully-plugin-puppeteer';

export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'knowledge-base',
  // add spsModulePath when using de Scully Platform Server,
  outDir: './dist/static',
  routes: {
    '/documentation/CDN/:title': {
      type: 'contentFolder',
      title: {
        folder: './documentation/CDN',
      },
    },
    '/documentation/Protection/:title': {
      type: 'contentFolder',
      title: {
        folder: './documentation/Protection',
      },
    },
    '/documentation/Cloud/:title': {
      type: 'contentFolder',
      title: {
        folder: './documentation/Cloud',
      },
    },
  },
};
