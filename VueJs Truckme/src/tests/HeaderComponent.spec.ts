import { shallowMount } from '@vue/test-utils';
import HeaderComponent from '@/components/HeaderComponent.vue';

describe('HeaderComponent', () => {
    it('renders correctly', () => {
        const wrapper = shallowMount(HeaderComponent);
        expect(wrapper.exists()).toBe(true);
    });
});
