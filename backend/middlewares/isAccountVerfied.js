exports.isAccountVerified = async (req, res, next) => {
   try {
      const currentUser = req.owner;
      if(currentUser.active !== true){
         return res.status(401).json({
            message: "Sorry, your account is not verified yet. Please check your email for verification link.",
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