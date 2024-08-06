export const buildFindQuery = (model, options = {}) => {
  const { limit, skip, sort, project = [], filter = {}, populate = [], lean = false } = options;
  let query = model.find(filter, project);
  if (sort) query = query.sort(sort);
  if (limit) query = query.limit(limit);
  if (skip) query = query.skip(skip);

  for (const p of populate) {
    const { key, fields = [] } = p;
    if (key) query = query.populate(key, fields);
  }

  return lean ? query.lean() : query;
};

export const buildFindOneQuery = (model, options = {}) => {
  const { sort, populate = [], filter = {}, project = [], lean = false } = options;

  let query = model.findOne(filter, project);
  if (sort) query = query.sort(sort);

  for (const p of populate) {
    const { key, fields = [] } = p;
    if (key) query = query.populate(key, fields);
  }

  return lean ? query.lean() : query;
};

export const buildUpdateOneQuery = (model, options = {}) => {
  const { filter = {}, data, opts = {} } = options;
  if (!data) throw new Error('Data is mandatory in update query');
  return model.updateOne(filter, data, opts);
};

export const buildUpdateManyQuery = (model, options = {}) => {
  const { filter = {}, data, opts = {} } = options;
  if (!data) throw new Error('Data is mandatory in update query');
  return model.update(filter, data, opts);
};

export const buildDistinctQuery = (model, options = {}) => {
  const { filter = {}, key } = options;
  if (!key) throw new Error('key is mandatory in distinct query');
  return model.distinct(key, filter);
};

export const buildFindOneUpdateQuery = (model, options = {}) => {
  const { filter = {}, data, opts = {} } = options;
  if (!data) throw new Error('Data is mandatory in update query');
  return model.findOneAndUpdate(filter, data, opts);
};

// export const buildAggregationQuery = (model, options = []) => {
//   if (!Array.isArray(pipeline) || pipeline.length === 0) {
//     throw new Error('Pipeline is mandatory in aggregation query');
//   }
//   return model.aggregate(pipeline);
// };
