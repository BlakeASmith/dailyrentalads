
def make_user(email, queries):
    return {"_id": email, "queries": queries, "seen": []}
