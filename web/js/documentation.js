$('#doc-1').click(function(){
    $('#doc-1').attr("class","doc-side-nav doc-active");
    $('#doc-2').attr("class","doc-side-nav");
    $('#doc-3').attr("class","doc-side-nav");
    $('#doc-pdf').attr("src", "resources/packaging-software-1.2.pdf");
});
$('#doc-2').click(function(){
    $('#doc-2').attr("class","doc-side-nav doc-active");
    $('#doc-1').attr("class","doc-side-nav");
    $('#doc-3').attr("class","doc-side-nav");
    $('#doc-pdf').attr("src", "resources/packaging-software-1.3.pdf");
});
$('#doc-3').click(function(){
    $('#doc-3').attr("class","doc-side-nav doc-active");
    $('#doc-1').attr("class","doc-side-nav");
    $('#doc-2').attr("class","doc-side-nav");
    $('#doc-pdf').attr("src", "resources/packaging-bowtie-software.pdf");
});