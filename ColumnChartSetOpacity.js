
widget.on('beforeviewloaded', (w, args) => {
    args.options.series[0].color = 'rgba(0, 0, 0, 0.2)';
    args.options.series[0].data.forEach(d => d.color = 'rgba(0, 0, 0, 0.2)');
});