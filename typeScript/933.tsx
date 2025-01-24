class RecentCounter {
    private request:number[];
    constructor() {
        this.request = [];
    }

    ping(t: number): number {
        this.request.push(t);
        while(this.request.length > 0 && this.request[0] < t - 3000){
            this.request.shift();
        }
        console.log(this.request)
        return this.request.length;
    }
}

// ["RecentCounter", "ping", "ping", "ping", "ping"]
// [[], [1], [100], [3001], [3002]]

//  * Your RecentCounter object will be instantiated and called as such:
  var obj = new RecentCounter()
  console.log(obj.ping(1))
  console.log(obj.ping(100))
  console.log(obj.ping(3001))
  console.log(obj.ping(3002))
  console.log(obj.ping(9000))
  
 