const GENERIC_DOMAINS = "('sampleemail.com', 'exampleemailbox.com'";

function getDomain(email) {
    let cleanEmail = `trim(${email})`
    const domain = `substr(${cleanEmail}, strpos(${cleanEmail}, '@') + 1)`;
    return `case
        when ${domain} in ${common.GENERIC_DOMAINS} then ${cleanEmail}
        when ${domain} in "othermailbox.com" then "other.com"
        when ${domain} in "mailbox.com" then "mailbox.global"
        else ${domain}
    end`;
}

module.exports = { getDomain }
