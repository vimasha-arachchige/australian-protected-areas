

const charts = [
  ["#state-bar-chart", "vis/chart1_state_bar.vg.json"],
  ["#state-map", "vis/chart2_protection_map.vg.json"],
  ["#threatened-species-map", "vis/chart3_species_map.vg.json"],
  ["#threat-status-heatmap", "vis/chart4_status_heatmap.vg.json"],
  ["#protected-growth-chart", "vis/chart5_growth.vg.json"],
  ["#bivariate-map", "vis/chart6_cartogram.vg.json"],
  ["#hexbin-map", "vis/chart7_protected_areas_map.vg.json"],
  ["#chart8", "vis/chart8_iucn_treemap.vg.json"],
  ["#chart9", "vis/chart9_parallel_coordinates.vg.json"],
  ["#chart10", "vis/chart10_sankey.vg.json"],
  ["#chart11", "vis/chart11_polar.vg.json"],
  ["#chart12", "vis/chart12_stream.vg.json"]
];

charts.forEach(([selector, path]) => {
  vegaEmbed(selector, path, {
    actions: false,
    renderer: "svg"
  }).catch(error => {
    console.error(`Error loading ${path}:`, error);
  });
});
