exports.isAccountVerified = async (req, res, next) => {
   try {
      const currentUser = req.owner;
      if(currentUser.active !== true){
         return res.status(401).json({
            message: "You haven't verified your account. Please check your mail.",
            data: null
         })
      }

      next();
   } catch (error) {
      return res.status(500).json({
         message: error.message,
         data: null
      })
   }
}