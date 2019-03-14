# Apartment App Security

Remember: Stories are done when tested, demoed and merged onto `master` in Github.


## Using Devise

**Story**: As a unauthenticated user I can see the apartment listing and nothing else.

**Story**: As a user I can only edit apartments that I have created.
Hint: This can be accomplished as part of the search, by comparing current user with the user that created an apartment, or by using `Ability`.

**Story**: As a user I can only remove apartments that I have created.

## Using CanCanCan and Rolify

**Story**: As a user I can see detailed information about all apartments.
*Hint*: use role "default" for this case

**Story**: As an admin I can sign in with an email address and password.
*Hint*: use role "admin" for this case

**Story**: As an admin I can edit and/or remove all apartments listed.

**Story**: As an admin I can view a page where I can make users admins.
