import { Node, Block, Text } from "slate";
import { List } from 'immutable';

import { Handler, MdNode, Mapper } from "../mapper";

export default class HtmlMapper implements Handler {
  fromMd(mdNode: MdNode, mapper: Mapper) {
    if (mdNode.type !== 'html') return;

    return Block.create({
      type: "html",
      nodes: List([
        Text.create({
          text: mdNode.value,
        })
      ]),
    });
  }

  toMd(valueNode: Node, mapper: Mapper) {
    if (valueNode.object !== 'block') return;
    if (valueNode.type !== 'html') return;

    return {
      type: 'html',
      value: valueNode.text,
    };
  }
}
