#include <stdio.h>
int main(){
    // int x =0;
    // printf("Enter a number: \n");
    // scanf("%d",&x);
    // if(x%2 ==0){
    //     printf("Even number\n");
    // }
    // else{
    //     printf("Odd number\n");
    // }

    // Nếu hôm nay là ngày 2/9 thì đi xem diễu binh

    int day ;
    int month ;
    printf("Enter day and month\n");
    scanf("%d %d",&day,&month);
    if(day==2&&month==9){
        printf("Go to Ba Dinh square\n");
    }
    if(day==8&&month ==3){
        printf("Go to cinema with girlfriend\n");
    }
    else{
        printf("Go to work\n");
    }
}