import { Prop, Component } from 'vue-property-decorator';
import { VueComponent } from 'vue-tsx-helper';
import { VNode, CreateElement } from 'vue';

export interface OptionProps {
  value?: string;
  label?: string;
  disabled?: boolean;
  selected?: boolean;
}

@Component
export class Option extends VueComponent<OptionProps> {
  @Prop(Boolean)
  public disabled: boolean;

  @Prop()
  public value: string | number;

  @Prop()
  public label: string | number;

  @Prop()
  public selected: boolean;

  public render(h: CreateElement): VNode {
    const { selected, disabled, value, label } = this.$props;

    return (
      <option selected={selected} disabled={disabled} value={value}>
        {this.$slots.default || label || value}
      </option>
    );
  }
}
