import { div } from "@/framework/dom-creators"
import { ItemPrice } from "@/models/Item";

export function cartItemSum({ value, currency = "PLN" }: ItemPrice) {
  const $panelBlock = div("panel-block is-justify-content-end")

  $panelBlock.innerHTML = `Total price: ${value} ${currency}`

  return $panelBlock
}
