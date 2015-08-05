set ver=1.0
if exist DirectForge-%ver%.xpi del DirectForge-%ver%.xpi
3rd_Party\7za.exe a -tzip DirectForge-%ver%.xpi chrome\ defaults\ *.rdf *.manifest