const router = require("express").Router();
const { Recipe, Tag, RecipeTag } = require("../../models");

router.get("/recipes/:id", async (req, res) => {
  try {
    const searchData = await Recipe.findAll({
      where: {
        recipe
      } [
        {
          model: Recipe,
          attributes: ["title"],
        },
        {
          model: Tag,
          attributes: ["tag_name"],
        },
        {
          model: RecipeTag,
          attributes: ["tag_id"],
        },
      ],
    });

    const search = searchData.get({ plain: true });

    res.render("search", {
      ...search,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
