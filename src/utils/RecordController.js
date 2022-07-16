class RecordController {
    add(list, item, order = "start") {
      let newList = [...list];
      if (order === "start") {
        newList.unshift(item);
      } else {
        newList.push(item);
      }
      return newList;
    }
    addMultiItem(list, items) {
      let newList = [...list, ...items];
      return newList;
    }
    update(list, item) {
      let newList = [...list];
      let record = newList.findIndex((each) => each.id === item.id);
      newList[record] = item;
      return newList;
    }
    updateSingleProperty(list, item, key, value) {
      let newList = [...list];
      newList = newList.map((each) => {
        return {
          ...each,
          [key]: each.id === item.id ? value : each[key],
        };
      });
  
      return newList;
    
    }
    search(list, searchConfig) {
      let newList = [];
      if (searchConfig && searchConfig.length > 0) {
        let searchResult = [];
        searchConfig.map((each) => {
          list.map((_) => {
            if (typeof each.property === "string") {
              if (
                _[each.property].includes(each.query.toString().toLowerCase())
              ) {
                searchResult.push(_);
              }
            } else {
              let value = _;
              each.property.forEach((q) => {
                value = value[q];
              });
              if (value.includes(each.query.toString().toLowerCase())) {
                searchResult.push(_);
              }
            }
          });
        });
        newList = [...newList, ...searchResult];
      }
      return newList;
    }
    delete(list, item) {
      let newList = [...list];
      let record = newList.findIndex((each) => each.id === item.id);
      newList.splice(record, 1);
      return newList;
    }
  }
  export default new RecordController();
  