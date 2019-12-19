function sample_filter(event, occurrences) {

    if (event.check.occurrences === occurrences) {
        return true;
    }
    return false;

}
