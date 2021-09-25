// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

//This is a Rest API it will run only on Serverside (Not a page)

export default (req, res) => {
  res.status(200).json({ name: 'John Doe' })
}
