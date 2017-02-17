// Parallelize
const numCPUs           = require('os').cpus().length;
const cluster           = require('cluster');

if (cluster.isMaster) {
    console.log("[MASTER] I am the ruler of you all!");
    
    // Fork workers.
    for (var i = 0; i < numCPUs; i++) {
        var worker = cluster.fork();
    }

    cluster.on('exit', function(worker, code, signal) {
        console.log("[MASTER] Worker " + worker.id + " is now freeeeeee!");
    });

     process.exit(0);
} else {
    console.log("[SLAVE " + cluster.worker.id + "] I am printing something, yay!");

    process.exit(0);
}
// process.exit(0);
