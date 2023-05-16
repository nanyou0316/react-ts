
// export default {}

// enum Color  { Green=3, Red, Blue=7 }
// let c1: Color = Color.Red
// let c2: Color = Color.Green
// let c3: Color = Color.Blue
// console.log(c1,c2,c3);//得到的是下标，默认是0开始，往后叠加，可以手动改下标


enum Color {Red = 1, Green, Blue}
let colorName: string = Color[2];

console.log(colorName);  // 显示'Green'因为上面代码里它的值是2
export default {}
