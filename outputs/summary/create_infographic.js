const pptxgen = require('pptxgenjs');
const { warnIfSlideHasOverlaps, warnIfSlideElementsOutOfBounds } = require('/home/oai/skills/slides/pptxgenjs_helpers');

const pptx = new pptxgen();
pptx.layout = 'LAYOUT_WIDE';
pptx.author = 'Project Cycle 3';
pptx.subject = 'Two-sample inference with alcohol-use extension';
pptx.title = 'Sex, Alcohol Use, and Sad or Hopeless Feelings';
pptx.company = 'Taipei Tech';
pptx.lang = 'en-US';
pptx.theme = { headFontFace: 'Aptos Display', bodyFontFace: 'Aptos' };
pptx.margin = 0;

const slide = pptx.addSlide();
slide.background = { color: 'FFFFFF' };

function addText(text, x, y, w, h, opts={}) {
  slide.addText(text, { x, y, w, h, margin: 0.05, breakLine: false, fit: 'shrink', ...opts });
}
function addImg(path, x, y, w, h) { slide.addImage({ path, x, y, w, h }); }
function addBox(x, y, w, h, fill='F9FAFB', line='E5E7EB') {
  slide.addShape(pptx.ShapeType.roundRect, { x, y, w, h, rectRadius: 0.08, fill: { color: fill }, line: { color: line, width: 1 } });
}

addText('Sex, Alcohol Use, and Sad or Hopeless Feelings', 0.35, 0.18, 12.5, 0.42, { fontSize: 25, bold: true, color: '111827' });
addText('Approved Cycle 3 Q3 as the main two-sample inference + alcohol-use extension for a deeper interpretation', 0.38, 0.67, 12.2, 0.24, { fontSize: 10.5, color: '4B5563' });

// Left story column
addBox(0.35, 1.02, 2.85, 1.15);
addText('Main research question', 0.52, 1.16, 2.5, 0.22, { fontSize: 11.5, bold: true, color: '111827' });
addText('Is the proportion of sad or hopeless feelings different between female and male students?', 0.52, 1.43, 2.48, 0.55, { fontSize: 10.5, color: '1F2937', breakLine: true });

addBox(0.35, 2.32, 2.85, 1.35);
addText('Core inference', 0.52, 2.47, 2.5, 0.22, { fontSize: 11.5, bold: true, color: '111827' });
addText('Two-proportion z-test\n95% CI for difference\nRisk difference, relative risk, odds ratio', 0.52, 2.76, 2.48, 0.70, { fontSize: 10.3, color: '1F2937', breakLine: true });

addBox(0.35, 3.82, 2.85, 1.42);
addText('Key result', 0.52, 3.98, 2.5, 0.22, { fontSize: 11.5, bold: true, color: '111827' });
addText('Female students: +14.4 percentage points', 0.52, 4.27, 2.48, 0.30, { fontSize: 13, bold: true, color: '111827' });
addText('95% CI [12.9, 15.9] pp; p < 0.001', 0.52, 4.62, 2.48, 0.25, { fontSize: 10, color: '4B5563' });
addText('Female vs male OR ≈ 2.01', 0.52, 4.90, 2.48, 0.25, { fontSize: 10.2, color: '4B5563' });

addBox(0.35, 5.40, 2.85, 0.95, 'EEF2FF', 'C7D2FE');
addText('Extension with alcohol use', 0.52, 5.54, 2.5, 0.22, { fontSize: 11.5, bold: true, color: '111827' });
addText('Adjusted OR: Female ≈ 2.13; Current alcohol use ≈ 1.90', 0.52, 5.83, 2.48, 0.32, { fontSize: 10.3, color: '1F2937', breakLine: true });

// Figures: emphasize extension instead of plain CI-only plot
addImg('../figures/03_stratified_by_alcohol.png', 3.45, 1.02, 4.55, 2.55);
addImg('../figures/05_logistic_predicted_probabilities.png', 8.20, 1.02, 4.65, 2.55);
addImg('../figures/04_odds_ratio_forest.png', 3.45, 4.02, 4.55, 2.08);
addImg('../figures/02_effect_size_dashboard.png', 8.20, 4.02, 4.65, 2.08);

addText('Conclusion: Female students reported sad/hopeless feelings more often than male students. The association remains clear after considering current alcohol use. Observational survey data support association, not causation.', 0.42, 6.74, 12.0, 0.37, { fontSize: 12.2, bold: true, color: '111827' });
addText('Data: YRBS 2007. Main complete-case sample n = 13,833; alcohol extension n = 12,601. Raw data kept unchanged; all recoding documented in references/.', 0.42, 7.13, 12.1, 0.22, { fontSize: 8.7, color: '6B7280' });

warnIfSlideHasOverlaps(slide, pptx, { ignoreDecorativeShapes: true });
warnIfSlideElementsOutOfBounds(slide, pptx);
pptx.writeFile({ fileName: 'one_slide_infographic_summary.pptx' });
