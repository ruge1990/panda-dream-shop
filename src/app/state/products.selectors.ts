import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Product, ChartData } from "../product-list/products.model";

export const selectProducts = createFeatureSelector<ReadonlyArray<Product>>('products');

export const selectBarChartData = createSelector(
    selectProducts,
    (products) => {
        let data: ChartData[] = [];
        products.map(item => { 
            let departments = item.department.split(" & ");
            for( let department of departments){
                console.log(department);
                let i = data.findIndex((item) => (item.name === department));
                if(i != -1){
                    data[i].value = data[i].value + 1;
                }
                else{
                    data.push({name: department, value: 1});
                }
            }
        })
        console.log(data);
        return data;
    }
);

export const selectPieChartData = createSelector(
    selectProducts,
    (products) => {
        let data: ChartData[] = [{
            name: "0-20",
            value: 0
        },{
            name: "20-40",
            value: 0
        },{
            name: "40-60",
            value: 0
        },{
            name: "60-80",
            value: 0
        },{
            name: "80-100",
            value: 0
        }];
        products.map(item => { 
            const price = item.price;
            switch(true){
                case (price >= 0 && price < 20):
                    data[0].value = data[0].value + 1;
                    break;
                case (price >= 20 && price < 40):
                    data[1].value = data[1].value + 1;
                    break;
                case (price >= 40 && price < 60):
                    data[2].value = data[2].value + 1;
                    break;
                case (price >= 60 && price < 80):
                    data[3].value = data[3].value + 1;
                    break;
                case (price >= 80 && price < 100):
                    data[4].value = data[4].value + 1;
                    break;                   
            }
        }) 
        console.log(data);
        return data;
    }
);