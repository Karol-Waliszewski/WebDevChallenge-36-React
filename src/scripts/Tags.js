import React, {Component} from 'react';

class Tags extends Component {

  getTags(products) {
    let tags = [];
    for (let product of products) {
      if (product.tags) {
        tags.push(...product.tags);
      }
    }
    tags.sort();
    return tags;
  }

  getPopularTags(tags) {
    let counter = {};
    let max = [];
    let popular = [];
    for (let tag of tags) {
      counter[tag] = (counter[tag] || 0) + 1;
    }
    for (let tag in counter) {
      if (max.length < 5) {
        max.push(counter[tag]);
        max.sort();
        continue;
      }
      for (let j = 4; j > 0; j--) {
        if (counter[tag] > max[j]) {
          for (let i = 0; i < j; i++) {
            max[i] = max[i + 1];
          }
          max[j] = counter[tag];
          break;
        }
      }
    }

    for (let tag in counter) {
      if (max.includes(counter[tag])) {
        popular.push(tag);
      }
    }
    return popular;
  }

  renderTags(tags) {
    let renderedTags = [];
    for (let tag in tags) {
      renderedTags.push(<li className="tags__item" key={tags[tag]}>
        <button className="tags__button">{tags[tag]}</button>
      </li>);
    }
    return renderedTags;
  }

  render() {
    var tags = this.renderTags(this.getPopularTags(this.getTags(this.props.products)));
    return (<div className="tags">
      <h5 className="sidebar__heading">Popular Tags</h5>
      <ul className="tags__list">
      {
        tags.length > 0
          ? tags
          : (<li className="tags__item">No tags.</li>)
      }
      </ul>
    </div>)
  }
}
export default Tags;
