import React, { useEffect, useState } from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { 
  Table, 
  TableBody, 
  TableCaption, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { 
  Alert, 
  AlertDescription, 
  AlertTitle 
} from "@/components/ui/alert";
import { 
  Info, 
  AlertCircle,
  BellRing,
  Check,
  X,
  Menu,
  Maximize,
  PanelLeft
} from 'lucide-react';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose
} from "@/components/ui/sheet";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

const Components = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  // Scroll to the appropriate section based on the URL hash
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);

  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Component Library</h1>
        <p className="text-muted-foreground mt-2">
          A comprehensive showcase of all HTML elements styled with our theme.
        </p>
      </div>

      <div className="grid gap-8">
        {/* Typography Section */}
        <section id="typography" className="scroll-mt-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Typography</CardTitle>
              <CardDescription>Text elements and typographic styles</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div>
                <h1 className="text-4xl font-bold">Heading 1</h1>
                <h2 className="text-3xl font-bold mt-4">Heading 2</h2>
                <h3 className="text-2xl font-bold mt-4">Heading 3</h3>
                <h4 className="text-xl font-bold mt-4">Heading 4</h4>
                <h5 className="text-lg font-bold mt-4">Heading 5</h5>
                <h6 className="text-base font-bold mt-4">Heading 6</h6>
              </div>
              
              <Separator />
              
              <div>
                <p className="text-lg mb-4">Large paragraph text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Maecenas ac augue eu nulla tincidunt dignissim.</p>
                
                <p className="mb-4">Regular paragraph text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Maecenas ac augue eu nulla tincidunt dignissim.</p>
                
                <p className="text-sm mb-4">Small paragraph text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                
                <p className="text-xs">Extra small text. Lorem ipsum dolor sit amet.</p>
              </div>
              
              <Separator />
              
              <div>
                <p className="mb-2"><strong>Strong/Bold text</strong> - Emphasizes important information</p>
                <p className="mb-2"><em>Italic text</em> - Used for emphasis or titles</p>
                <p className="mb-2"><u>Underlined text</u> - Highlighting or links</p>
                <p className="mb-2"><code className="bg-muted px-1 py-0.5 rounded text-sm">Code text</code> - For displaying code snippets</p>
                <p className="mb-2"><mark className="bg-yellow-200 px-1 py-0.5">Marked/Highlighted text</mark> - For highlighting content</p>
                <p className="mb-2"><del>Deleted/Strikethrough text</del> - For showing removed content</p>
                <p className="mb-2">Text with <sub>subscript</sub> and <sup>superscript</sup> elements</p>
              </div>
              
              <Separator />
              
              <div>
                <blockquote className="border-l-4 border-primary pl-4 italic my-4">
                  "This is a blockquote. It represents quoted text from another source."
                  <footer className="text-sm mt-2">— Famous Person</footer>
                </blockquote>
              </div>
              
              <Separator />
              
              <div>
                <h4 className="text-lg font-semibold mb-2">Lists</h4>
                
                <h5 className="font-medium mt-4 mb-2">Unordered List</h5>
                <ul className="list-disc pl-5 space-y-1">
                  <li>First item</li>
                  <li>Second item</li>
                  <li>Third item with nested items
                    <ul className="list-circle pl-5 mt-1 space-y-1">
                      <li>Nested item 1</li>
                      <li>Nested item 2</li>
                    </ul>
                  </li>
                </ul>
                
                <h5 className="font-medium mt-4 mb-2">Ordered List</h5>
                <ol className="list-decimal pl-5 space-y-1">
                  <li>First item</li>
                  <li>Second item</li>
                  <li>Third item</li>
                </ol>
                
                <h5 className="font-medium mt-4 mb-2">Definition List</h5>
                <dl>
                  <dt className="font-semibold mt-2">Term 1</dt>
                  <dd className="pl-4">Definition for term 1</dd>
                  <dt className="font-semibold mt-2">Term 2</dt>
                  <dd className="pl-4">Definition for term 2</dd>
                </dl>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Buttons Section */}
        <section id="buttons" className="scroll-mt-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Buttons</CardTitle>
              <CardDescription>Button styles and variations</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div>
                <h4 className="text-lg font-semibold mb-4">Button Variants</h4>
                <div className="flex flex-wrap gap-4">
                  <Button variant="default">Default</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="destructive">Destructive</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="link">Link</Button>
                </div>
              </div>
              
              <Separator />
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Button Sizes</h4>
                <div className="flex flex-wrap gap-4 items-center">
                  <Button size="lg">Large</Button>
                  <Button size="default">Default</Button>
                  <Button size="sm">Small</Button>
                  <Button size="icon"><Info /></Button>
                </div>
              </div>
              
              <Separator />
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Buttons with Icons</h4>
                <div className="flex flex-wrap gap-4">
                  <Button>
                    <Check className="mr-2 h-4 w-4" /> Save Changes
                  </Button>
                  <Button variant="outline">
                    Settings <Info className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="secondary">
                    <BellRing className="mr-2 h-4 w-4" /> Notifications
                  </Button>
                </div>
              </div>
              
              <Separator />
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Button States</h4>
                <div className="flex flex-wrap gap-4">
                  <Button>Default</Button>
                  <Button disabled>Disabled</Button>
                  <Button className="relative">
                    Loading
                    <span className="absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2">
                      <span className="absolute h-4 w-4 animate-ping rounded-full bg-primary/80 opacity-75"></span>
                      <span className="relative block h-4 w-4 rounded-full bg-primary opacity-90"></span>
                    </span>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Forms Section */}
        <section id="forms" className="scroll-mt-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Form Elements</CardTitle>
              <CardDescription>Input controls and form components</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div>
                <h4 className="text-lg font-semibold mb-4">Text Inputs</h4>
                <div className="grid gap-4 max-w-md">
                  <div className="grid gap-2">
                    <label htmlFor="text-input" className="text-sm font-medium">Text Input</label>
                    <Input id="text-input" placeholder="Enter text here" />
                  </div>
                  
                  <div className="grid gap-2">
                    <label htmlFor="disabled-input" className="text-sm font-medium">Disabled Input</label>
                    <Input id="disabled-input" placeholder="Disabled input" disabled />
                  </div>
                  
                  <div className="grid gap-2">
                    <label htmlFor="email-input" className="text-sm font-medium">Email Input</label>
                    <Input id="email-input" type="email" placeholder="email@example.com" />
                  </div>
                  
                  <div className="grid gap-2">
                    <label htmlFor="password-input" className="text-sm font-medium">Password Input</label>
                    <Input id="password-input" type="password" placeholder="Enter password" />
                  </div>
                  
                  <div className="grid gap-2">
                    <label htmlFor="search-input" className="text-sm font-medium">Search Input</label>
                    <div className="relative">
                      <Input id="search-input" placeholder="Search..." className="pl-8" />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              
              <Separator />
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Checkboxes and Radio Buttons</h4>
                <div className="grid gap-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <label
                      htmlFor="terms"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Accept terms and conditions
                    </label>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox id="checkbox-disabled" disabled checked />
                    <label
                      htmlFor="checkbox-disabled"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Disabled checkbox (checked)
                    </label>
                  </div>
                </div>
              </div>
              
              <Separator />
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Form Example</h4>
                <form className="grid gap-4 max-w-md">
                  <div className="grid gap-2">
                    <label htmlFor="name" className="text-sm font-medium">Name</label>
                    <Input id="name" placeholder="Enter your name" />
                  </div>
                  
                  <div className="grid gap-2">
                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <Input id="email" type="email" placeholder="email@example.com" />
                  </div>
                  
                  <div className="grid gap-2">
                    <label htmlFor="message" className="text-sm font-medium">Message</label>
                    <textarea 
                      id="message" 
                      className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" 
                      placeholder="Type your message here"
                    />
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox id="subscribe" />
                    <label
                      htmlFor="subscribe"
                      className="text-sm font-medium leading-none"
                    >
                      Subscribe to newsletter
                    </label>
                  </div>
                  
                  <Button type="submit" className="mt-2">Submit</Button>
                </form>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Tables Section */}
        <section id="tables" className="scroll-mt-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Tables</CardTitle>
              <CardDescription>Table styles and variations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <Table>
                  <TableCaption>A list of recent invoices</TableCaption>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Invoice</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Method</TableHead>
                      <TableHead className="text-right">Amount</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">INV001</TableCell>
                      <TableCell>
                        <Badge variant="default" className="bg-green-500">Paid</Badge>
                      </TableCell>
                      <TableCell>Credit Card</TableCell>
                      <TableCell className="text-right">$250.00</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">INV002</TableCell>
                      <TableCell>
                        <Badge variant="default" className="bg-yellow-500">Pending</Badge>
                      </TableCell>
                      <TableCell>PayPal</TableCell>
                      <TableCell className="text-right">$125.00</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">INV003</TableCell>
                      <TableCell>
                        <Badge variant="destructive">Canceled</Badge>
                      </TableCell>
                      <TableCell>Bank Transfer</TableCell>
                      <TableCell className="text-right">$450.00</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Modals and Dialogs Section */}
        <section id="modals" className="scroll-mt-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Modals and Dialogs</CardTitle>
              <CardDescription>Modal dialogs, alerts, and slide-out panels</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div>
                <h4 className="text-lg font-semibold mb-4">Dialog</h4>
                <div className="flex flex-wrap gap-4">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="default">Open Dialog</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                      <DialogHeader>
                        <DialogTitle>Dialog Title</DialogTitle>
                        <DialogDescription>
                          A dialog is a window overlaid on either the primary window or another dialog window. 
                          Windows under a modal dialog are inert.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="py-4">
                        <p className="text-sm text-muted-foreground">
                          Dialogs are typically used for confirming actions, displaying important information, or requiring a decision from the user.
                        </p>
                      </div>
                      <DialogFooter>
                        <DialogClose asChild>
                          <Button type="button" variant="secondary">Cancel</Button>
                        </DialogClose>
                        <Button type="button">Save Changes</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>

                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline">Form Dialog</Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Edit Profile</DialogTitle>
                        <DialogDescription>
                          Make changes to your profile here. Click save when you're done.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                          <label htmlFor="name" className="text-right text-sm font-medium">
                            Name
                          </label>
                          <Input
                            id="name"
                            defaultValue="John Doe"
                            className="col-span-3"
                          />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <label htmlFor="username" className="text-right text-sm font-medium">
                            Username
                          </label>
                          <Input
                            id="username"
                            defaultValue="@johndoe"
                            className="col-span-3"
                          />
                        </div>
                      </div>
                      <DialogFooter>
                        <DialogClose asChild>
                          <Button type="button" variant="secondary">Cancel</Button>
                        </DialogClose>
                        <Button type="button">Save changes</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
              
              <Separator />
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Alert Dialog</h4>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button variant="destructive">Delete Item</Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                      <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete your
                        account and remove your data from our servers.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction>Continue</AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
              
              <Separator />
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Sheet (Slide-out Panel)</h4>
                <div className="flex flex-wrap gap-4">
                  <Sheet>
                    <SheetTrigger asChild>
                      <Button variant="outline">
                        <PanelLeft className="mr-2 h-4 w-4" />
                        Open Left Sheet
                      </Button>
                    </SheetTrigger>
                    <SheetContent side="left">
                      <SheetHeader>
                        <SheetTitle>Left Sheet</SheetTitle>
                        <SheetDescription>
                          A panel that slides in from the left side of the screen.
                        </SheetDescription>
                      </SheetHeader>
                      <div className="grid gap-4 py-4">
                        <p className="text-sm text-muted-foreground">
                          Sheets are versatile components that can be used for navigation,
                          filters, or additional information.
                        </p>
                        <div className="grid grid-cols-1 gap-2">
                          <Button variant="ghost" className="justify-start">Dashboard</Button>
                          <Button variant="ghost" className="justify-start">Settings</Button>
                          <Button variant="ghost" className="justify-start">Messages</Button>
                        </div>
                      </div>
                      <SheetFooter>
                        <SheetClose asChild>
                          <Button>Close</Button>
                        </SheetClose>
                      </SheetFooter>
                    </SheetContent>
                  </Sheet>

                  <Sheet>
                    <SheetTrigger asChild>
                      <Button variant="outline">
                        <Menu className="mr-2 h-4 w-4" />
                        Open Right Sheet
                      </Button>
                    </SheetTrigger>
                    <SheetContent>
                      <SheetHeader>
                        <SheetTitle>Right Sheet</SheetTitle>
                        <SheetDescription>
                          A panel that slides in from the right side of the screen.
                        </SheetDescription>
                      </SheetHeader>
                      <div className="grid gap-4 py-4">
                        <div className="grid gap-2">
                          <div className="flex items-center gap-2">
                            <Checkbox id="terms" />
                            <label htmlFor="terms">Accept terms and conditions</label>
                          </div>
                          <div className="flex items-center gap-2">
                            <Checkbox id="newsletter" />
                            <label htmlFor="newsletter">Subscribe to newsletter</label>
                          </div>
                        </div>
                      </div>
                      <SheetFooter>
                        <SheetClose asChild>
                          <Button type="button" variant="secondary">Cancel</Button>
                        </SheetClose>
                        <Button type="button">Save</Button>
                      </SheetFooter>
                    </SheetContent>
                  </Sheet>
                </div>
              </div>
              
              <Separator />
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Popover</h4>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline">Open Popover</Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-80">
                    <div className="grid gap-4">
                      <div className="space-y-2">
                        <h4 className="font-medium leading-none">Dimensions</h4>
                        <p className="text-sm text-muted-foreground">
                          Set the dimensions for the layer.
                        </p>
                      </div>
                      <div className="grid gap-2">
                        <div className="grid grid-cols-3 items-center gap-4">
                          <label htmlFor="width" className="text-sm">Width</label>
                          <Input
                            id="width"
                            defaultValue="100%"
                            className="col-span-2 h-8"
                          />
                        </div>
                        <div className="grid grid-cols-3 items-center gap-4">
                          <label htmlFor="height" className="text-sm">Height</label>
                          <Input
                            id="height"
                            defaultValue="25px"
                            className="col-span-2 h-8"
                          />
                        </div>
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* UI Components Section */}
        <section id="ui-components" className="scroll-mt-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">UI Components</CardTitle>
              <CardDescription>Advanced interface elements</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div>
                <h4 className="text-lg font-semibold mb-4">Cards</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Card Title</CardTitle>
                      <CardDescription>Card description goes here</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>Card content and details would go here.</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-primary">
                    <CardHeader className="bg-primary/10">
                      <CardTitle>Highlighted Card</CardTitle>
                      <CardDescription>With custom styling</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>This card has custom border and header styling.</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              <Separator />
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Alerts</h4>
                <div className="grid gap-4">
                  <Alert>
                    <Info className="h-4 w-4" />
                    <AlertTitle>Information</AlertTitle>
                    <AlertDescription>
                      This is an informational alert message.
                    </AlertDescription>
                  </Alert>
                  
                  <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>
                      Something went wrong. Please try again later.
                    </AlertDescription>
                  </Alert>
                </div>
              </div>
              
              <Separator />
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Badges</h4>
                <div className="flex flex-wrap gap-4">
                  <Badge>Default</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="outline">Outline</Badge>
                  <Badge variant="destructive">Destructive</Badge>
                  <Badge className="bg-green-500">Success</Badge>
                  <Badge className="bg-yellow-500">Warning</Badge>
                  <Badge className="bg-blue-500">Info</Badge>
                </div>
              </div>
              
              <Separator />
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Avatars</h4>
                <div className="flex flex-wrap gap-4">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  
                  <Avatar>
                    <AvatarFallback className="bg-primary text-primary-foreground">JD</AvatarFallback>
                  </Avatar>
                  
                  <Avatar>
                    <AvatarFallback className="bg-green-500 text-white">MK</AvatarFallback>
                  </Avatar>
                </div>
              </div>
              
              <Separator />
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Accordion</h4>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>What is this component library?</AccordionTrigger>
                    <AccordionContent>
                      This component library showcases all HTML elements styled with our theme, providing a comprehensive reference for designers and developers.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>How do I use these components?</AccordionTrigger>
                    <AccordionContent>
                      Simply import the components from their respective files and use them in your React applications. Each component is built with accessibility and customization in mind.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Can I customize these components?</AccordionTrigger>
                    <AccordionContent>
                      Yes, all components are built using Tailwind CSS, making them highly customizable. You can extend styles using utility classes or modify the base styles in your Tailwind configuration.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              
              <Separator />
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Aspect Ratio</h4>
                <div className="grid gap-4">
                  <AspectRatio ratio={16 / 9} className="bg-muted rounded-md overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
                      alt="Image"
                      className="object-cover w-full h-full"
                    />
                  </AspectRatio>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </DashboardLayout>
  );
};

export default Components;
