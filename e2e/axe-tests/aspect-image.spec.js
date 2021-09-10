import { checkForViolations } from '@testcafe-community/axe';

// Executes
fixture `basic aspect image`
  .page `http://localhost:6006/iframe.html?id=components-aspectimage--basic&args=&globals=&viewMode=story`

test('basic aspect image a11y', async t => {
  const context = { exclude: [[]] };
  const options = {
    rules: {
      'landmark-one-main': { enabled: false },
      'region': { enabled: false },
      'page-has-heading-one': { enabled: false }
    }
 };

  await checkForViolations(t, context, options);
});
