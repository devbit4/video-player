export const trending = (req, res) => res.render('home', { pageTitle: 'Home' });
export const search = (req, res) => res.send('search');

export const see = (req, res) => {
  return res.render('watch');
};
export const edit = (req, res) => res.render('edit');
export const upload = (req, res) => res.send('upload video');
export const remove = (req, res) => res.send('remove video');
