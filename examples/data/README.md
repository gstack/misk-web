# Examples Data

## Data Sets

- [`adminDashboardTabs`](https://square.github.io/misk-web/examples/data/demo/adminDashboardTabs.json): Misk bound admin dashboard tabs
- [`cars`](https://square.github.io/misk-web/examples/data/demo/cars.json): 1000 cars with quantities, prices, locations
- [`config`](https://square.github.io/misk-web/examples/data/demo/config.json): Misk service config
- [`dinos`](https://square.github.io/misk-web/examples/data/demo/dinos.json): 1000 dinosaurs
- [`serviceMetadata`](https://square.github.io/misk-web/examples/data/demo/serviceMetadata.json): Misk service metadata
- [`shortUrls`](https://square.github.io/misk-web/examples/data/demo/shortUrls.json): Shortened urls
- [`webActions`](https://square.github.io/misk-web/examples/data/demo/webActions.json): Misk bound web actions

## Getting Started

1. `npm install`
2. Add any new data sets to a new file in `src/data/`
3. Rebuild the JSON writer executable with `npm run-script build`
4. Regenerate the `demo/*.JSON` with `node dist/index.js`

## Resources

- Batch test data generated with [Mockaroo](https://mockaroo.com/)
