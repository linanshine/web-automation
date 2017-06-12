import indexMode from '../model/indexModel';
const indexController = {
    index() {
        return async(ctx, next) => {
            ctx.body = await ctx.render('index');
        }
    }

    update(){
    	var indexM = new indexMode():
    	return async(ctx, next)=>{
    		ctx.body = await indexMode.update;
    	}
    }
}

export default indexController;
