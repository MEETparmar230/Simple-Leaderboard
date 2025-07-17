import mongoose from 'mongoose'

const claimHistorySchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true,
    },
    claimedPoint:{
        type:Number,
        required:true
    },
    time:{
        type:Date,
        default:Date.now
    }
    
})

const ClaimHistory = mongoose.model('ClaimHistory', claimHistorySchema);

export default ClaimHistory;