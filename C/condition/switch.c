#include<stdio.h>
int main(){
    int x =0;
    printf("Enter a number \n");
    scanf("%d",&x);
    switch(x%2){
        case 0:
        printf("Even number\n");
        break;
        case 1:
        printf("Old number\n");
        break;
    }
}