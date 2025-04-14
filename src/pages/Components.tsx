
import React, { useEffect } from 'react';
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
  Check
} from 'lucide-react';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';

const Components = () => {
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
