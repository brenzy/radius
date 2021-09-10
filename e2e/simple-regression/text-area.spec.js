import { ReactSelector } from 'testcafe-react-selectors';
import { Selector } from 'testcafe'

// Executes
fixture `text-area`
  .page `http://localhost:6006/iframe.html?id=components-forms-textarea--basic&args=&viewMode=story`

test('text-area character count', async t => {
  const characterCount = Selector('#root > div > div > div > p' );
  await t
    // For demo purposes, wait three seconds so we can see what is happening
    .wait(3000)
    // Type text in the text area
    .typeText( ReactSelector('TextArea'), 'Testing 1 2 3')
    // For demo purposes, Wait three seconds so we can see what is happening
    .wait(3000)
    // Use the assertion to check if the actual character count is equal to the expected one
    .expect(characterCount.innerText).eql('13/100');
});
