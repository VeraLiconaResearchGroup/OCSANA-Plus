$('#doc-1').click(function(){
    $('#doc-1').attr("class","doc-side-nav doc-active");
    $('#doc-2').attr("class","doc-side-nav");
    $('#doc-pdf').attr("src", "resources/packaging-software.pdf");
});
$('#doc-2').click(function(){
    $('#doc-2').attr("class","doc-side-nav doc-active");
    $('#doc-1').attr("class","doc-side-nav");
    $('#doc-pdf').attr("src", "resources/packaging-bowtie-software.pdf");
});