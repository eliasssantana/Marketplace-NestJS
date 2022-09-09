import { Test, TestingModule } from '@nestjs/testing'
import { AdminController } from './admin.controller'


describe('Test AdminController', () =>{
    let adminController: AdminController;

    beforeEach(() => {
        adminController = new AdminController()
    })

    describe('root route', () => {
        it('should display some text', () =>{
            expect(adminController).toBeDefined()
        })

        // it('should return a viewData', () => {
        //     expect(adminController.index()).toBe({
        //         viewData: {
        //             title: 'Admin page - Admin - Online Store'
        //         }
        //     })
        // })
    })
})