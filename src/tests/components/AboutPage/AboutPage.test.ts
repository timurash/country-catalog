import { render } from '@testing-library/vue';
import AboutPage from '../../../components/AboutPage/AboutPage.vue';

test('Correct render of AboutPage', () => {
  const { getByText } = render(AboutPage);

  getByText('REST Countries V2 API');
});
