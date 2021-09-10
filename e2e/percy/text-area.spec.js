import percySnapshot from '@percy/testcafe';
import { ReactSelector } from 'testcafe-react-selectors';

fixture('text-area')
  .page('http://localhost:6006/iframe.html?id=components-forms-textarea--basic&args=&viewMode=story');

test('text-area character count', async t => {
  await t.typeText( ReactSelector('TextArea'), 'Testing 1 2 3')
  await percySnapshot(t, 'text-area character count');
});
