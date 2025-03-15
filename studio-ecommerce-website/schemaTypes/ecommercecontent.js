export default{
    name:'product',
    type:'document',
    title:'Product',
    fields:[
        {
            name:'title',
            type:'string',
            title:'Title of the product'
        },
        {
            name:'slug',
            type:'slug',
            title:'Slug',
            options:{
                source:'title'
            }
        },
        {
            name:'productimage',
            type:'image',
            title:'Product Image'
        },
        {
            name:'price',
            type:'number',
            title:'Price'
        },
        {
            name:'description',
            type:'text',
            title:'Description'
        },
    ]
        // {
        //     name:'category',
        //     type:'string',
        //     title:'Category',
        //     // to:[
        //     //     {
        //     //         type:'category'
        //     //     }
        //     // ]
        // }
    
}