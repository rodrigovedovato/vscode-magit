import { View } from "../abstract/view";
import { MagitChange } from "../../models/magitChange";
import { ChangeView } from "./changeView";
import { Section, SectionHeaderView } from "../sectionHeader";
import { LineBreakView } from "../lineBreakView";

export class ChangeSectionView extends View {
  isFoldable = true;

  constructor(section: Section, private changes: MagitChange[]) {
    super();
    this.subViews = [
      new SectionHeaderView(section, changes.length),
      ...changes.map(change => new ChangeView(change)),
      new LineBreakView()
    ];
  }

  onClicked() {
    // If clicked on section, call section header onClick
    // subView clicks are prioritized
    return this.subViews[0];
  }
}