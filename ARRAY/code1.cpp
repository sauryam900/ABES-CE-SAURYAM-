#include<iostream>
using namespace std;
int main(){
   /* int marks[]={99,100,56,78,89};
   
    cout<<marks[0]<<endl;
    cout<<marks[1]<<endl;
    cout<<marks[2]<<endl;
    cout<<marks[3]<<endl;
    cout<<marks[4]<<endl;
    return 0; */
    int size=5;
    int marks[size];
    for(int i=0;i<size;i++){
        cin >> marks[i];
    }
    for(int i=0;i<size;i++){
        cout << marks[i] << endl;
    }




}