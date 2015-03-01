/**
 * GET /
 * Admin page.
 */
exports.getAdminIndex = function(req, res) {
  res.render('admin', {
    title: 'Admin'
  });
};