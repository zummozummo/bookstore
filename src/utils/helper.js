import slugify from 'slugify';

function createSlug(title, objectId) {
  // Remove special characters and convert spaces to hyphens
  const slug = slugify(title, { lower: true });

  // Append MongoDB ObjectId to ensure uniqueness
  const slugWithId = `${slug}-${objectId}`;

  return slugWithId;
}

export { createSlug };
