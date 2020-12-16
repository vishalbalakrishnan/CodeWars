function enough(cap, on, wait) {
    return on + wait < cap ? 0 : Math.abs(cap - on - wait)
}