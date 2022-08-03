import { Controller, Get, Render, Param, Res} from "@nestjs/common";
import { ProductsService } from './models/products.service';

@Controller("/products")
export class ProductsController{

    constructor(private readonly productsService: ProductsService){}

    @Get('/')
    @Render('products/index')
    async index(){

        const viewData = []

        viewData['title'] = 'Products - Online Store'
        viewData['subtitle'] = 'List of products'
        viewData['products'] = await this.productsService.findAll()

        return { 
            viewData: viewData
        }

    }

    @Get('/:id')
    async show(@Param('id') id: number, @Res() response){

        const product = await this.productsService.findOne(id)

        if (product === null){
            return response.redirect('/products');
        }

        const viewData = []

        viewData['title'] = product.name + ' - Online Store'
        viewData['subtitle'] = product.name + ' - Product Information'
        viewData['product'] = product

        return response.render('products/show', {viewData: viewData})
    }
}