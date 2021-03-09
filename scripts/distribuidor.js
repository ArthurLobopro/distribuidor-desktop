export default function distribuidor(num){
    let s1,s2,p2,s3,p3,d3,s4,p4,d4,f4,s5,p5,d5,f5,s6,p6,d6,s7,p7
    if (num-2>=0){
        s1=2
        num-=2
    }else{
        s1=num
        num=0
    }
    if (num-2 >= 0){
        s2 = 2
        num-=2
    }else {
        s2 = num
        num = 0
    }
    if(num-6>=0){
        p2=6
        num=num-6
    }else{
        p2=num
        num=0
    }
    if (num - 2 >= 0){
        s3 = 2
        num-= 2
    }else {
        s3 = num
        num = 0
    }
    if(num-6>=0){
        p3=6
        num-=6
    }else{
        p3=num
        num=0
    }
    if (num - 2 >= 0){
        s4 = 2
        num-=2
    }else {
        s4 = num
        num = 0
    }
    if(num-10>=0){
        d3=10
        num-=10
    }else{
        d3=num
        num=0
    }
    if(num-6>=0){
        p4=6
        num-= 6
    }else{
        p4=num
        num=0
    }
    if (num - 2 >= 0){
        s5 = 2
        num-=2
    }else {
        s5 = num
        num = 0
    }
    if(num-10>=0){
        d4=10
        num-=10
    }else{
        d4=num
        num=0
    }
    if(num-6>=0){
        p5=6
        num-=6
    }else{
        p5=num
        num=0
    }
    if (num - 2 >= 0){
        s6 = 2
        num-=2
    }else {
        s6 = num
        num = 0
    }
    if(num-14>=0){
        f4=14
        num-=14
    }else{
        f4=num
        num=0
    }
    if(num-10>=0){
        d5=10
        num-=10
    }else{
        d5=num
        num=0
    }
    if(num-6>=0){
        p6=6
        num-=6
    }else{
        p6=num
        num=0
    }
    if (num - 2 >= 0){
        s7 = 2
        num-=2
    }else {
        s7 = num
        num = 0
    }
    if(num-14>=0){
        f5=14
        num-=14
    }else{
        f5=num
        num=0
    }
    if(num-10>=0){
        d6=10
        num-=10
    }else{
        d6=num
        num=0
    }
    if(num-6>=0){
        p7=6
        num-=6
    }else{
        p7=num
        num=0
    }
    return {s1,s2,p2,s3,p3,d3,s4,p4,d4,f4,s5,p5,d5,f5,s6,p6,d6,s7,p7}
}