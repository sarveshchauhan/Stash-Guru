export const get_store_size = (storeSize) => {

    storeSize = JSON.parse(storeSize);
    let storeWidth = storeSize && storeSize.length > 0 ? storeSize[0].width : 0;
    let storeHeight = storeSize && storeSize.length > 0 ? storeSize[0].height : 0;
    let storeDepth = storeSize && storeSize.length > 0 ? storeSize[0].depth : 0;

    return {
        width: storeWidth,
        height: storeHeight,
        depth: storeDepth
    }
}