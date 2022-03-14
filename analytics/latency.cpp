#include<bits/stdc++.h>
using namespace std;

int main(){
    long long startTime=0;
    vector<double> lsum(1801,0);
    vector<long long> reqcount(1801,0);
    fstream newfile;
    newfile.open("consolelog.txt",ios::in); //open a file to perform read operation using file object
    if (newfile.is_open()){   //checking whether the file is open
        string tp;
        while(getline(newfile, tp)){ //read data from file object and put it into string.
            // cout << tp << "\n"; //print the data of the string
            vector <string> tokens;
            
            // stringstream class check1
            stringstream check1(tp);
            
            string intermediate;
            
            // Tokenizing w.r.t. space ' '
            while(getline(check1, intermediate, ' '))
            {
                tokens.push_back(intermediate);
            }
            for(string s:tokens)
                cout<<s<<" ";
            cout<<endl;
            long long curTime = stoll(tokens[1]);
            if(startTime==0)
                startTime = curTime;
            double latency = stod(tokens[2]);
            int index = (curTime-startTime)%1000;
            if(index>1800)
                continue;
            lsum[index]+=latency;
            reqcount[index]++;
        }
        newfile.close(); //close the file object.
    }
    fstream outfile;
    outfile.open("plot.txt",ios::out);  // open a file to perform write operation using file object
    if(outfile.is_open()) //checking whether the file is open
    {
        for(int i=0;i<1801;i++){
            if(reqcount[i]!=0)
                outfile<<i<<" "<<(lsum[i]/reqcount[i])<<"\n";
        }
        outfile.close();    //close the file object
    }
    return 0;

}
