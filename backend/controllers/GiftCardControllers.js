const GiftCard =require('../models/GiftCardModels');

const createGiftCard = async (req , res)=>{
    try {
        const newGiftCard = new GiftCard(req.body);
        await newGiftCard.save();
        res.status(201).json({message :" GiftCard Created ",newGiftCard});
    } catch (err) {
        res.status(400).json({Error : err.message});
    }
};

const getGiftCard = async (req,res)=>{
    try {
        const gifts = await GiftCard.find();
        res.status(200).json({message : "Your Gift Card : ", gifts});
    } catch (err) {
        res.status(500).json({error : err.message})
    }
};

const updateGiftCard = async (req,res)=>{
    try {
        
    } catch (error) {
        
    }
}