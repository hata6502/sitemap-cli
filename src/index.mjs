#!/usr/bin/env node

import Sitemapper from "sitemapper";

for (const sitemapURL of process.argv.slice(2)) {
  const sitemapperResponse = await new Sitemapper().fetch(sitemapURL);

  for (const site of sitemapperResponse.sites) {
    console.log(site);
  }

  for (const error of sitemapperResponse.errors) {
    console.error(error);
  }
}
