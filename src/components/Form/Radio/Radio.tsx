import { VueComponent } from 'vue-tsx-helper';
import { Prop, Component } from 'vue-property-decorator';
import { Sizes, Size } from './Size';

export interface IRadioProps {
  value?: string;
  label?: string;
  name?: string;
  checked?: boolean;
  inline?: boolean;
  size?: Sizes;
}

@Component({
  model: {
    prop: 'model',
    event: 'change',
  },
})
export class Radio extends VueComponent<IRadioProps> {
  @Prop([String, Number])
  public value: string | number;

  @Prop(String)
  public label: string;

  @Prop(String)
  public name: string;

  @Prop(Boolean)
  public checked?: boolean;

  @Prop(Boolean)
  public inline: boolean;

  @Prop(String)
  public size: Sizes;

  @Prop([String, Boolean, Object, Number, Array])
  protected model: any;

  public onChecked(e: any): void {
    this.$emit('change', this._value);
  }

  public render() {
    const cssClass = [
      'form-radio',
      this.inline ? 'form-inline' : false,
      Size[this.size] || '',
    ];

    return (
      <label class={cssClass}>
        <input
          type="radio"
          checked={this.checked || this.model === this._value}
          name={this.name}
          onChange={this.onChecked}
        />
        <i class="form-icon"></i> {this._label}
      </label>
    );
  }

  private get _label() {
    return this.$slots.default || this.label;
  }

  private get _value() {
    return this.value || this.$slots.default[0].text;
  }
}
